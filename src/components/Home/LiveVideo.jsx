// import { useEffect, useRef } from "react";

// const LiveKitViewer = () => {
//   const videoRef = useRef(null);
//   const roomRef = useRef(null);

//   useEffect(() => {
//     connectToRoom();

//     // 🔓 REQUIRED: unlock audio once (no UI)
//     const unlock = async () => {
//       try {
//         const ctx = new (window.AudioContext ||
//           window.webkitAudioContext)();
//         await ctx.resume();
//         document.removeEventListener("click", unlock);
//         document.removeEventListener("keydown", unlock);
//       } catch {}
//     };

//     document.addEventListener("click", unlock);
//     document.addEventListener("keydown", unlock);

//     return () => disconnectFromRoom();
//   }, []);

//   const getToken = async () => {
//     const res = await fetch("http://localhost:5000/token", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         roomName: "live",
//         participantName: `viewer-${Math.random()
//           .toString(36)
//           .substring(7)}`,
//       }),
//     });

//     if (!res.ok) throw new Error("Token failed");
//     return res.json();
//   };

//   const connectToRoom = async () => {
//     try {
//       const { token, url } = await getToken();
//       const LiveKit = await import("livekit-client");

//       const room = new LiveKit.Room({
//         adaptiveStream: true,
//         dynacast: true,
//       });

//       roomRef.current = room;

//       room.on("trackSubscribed", (track, _pub, participant) => {
//         if (participant.identity !== "camera") return;

//         // ✅ VIDEO
//         if (track.kind === "video" && videoRef.current) {
//           track.attach(videoRef.current);
//         }

//         // ✅ AUDIO → ATTACHED TO SAME VIDEO ELEMENT
//         if (track.kind === "audio" && videoRef.current) {
//           track.attach(videoRef.current);
//         }
//       });

//       room.on("trackUnsubscribed", (track) => {
//         track.detach();
//       });

//       await room.connect(url, token);

//       // Handle already-published tracks
//       room.remoteParticipants.forEach((participant) => {
//         if (participant.identity === "camera") {
//           participant.trackPublications.forEach((pub) => {
//             if (pub.isSubscribed && pub.track && videoRef.current) {
//               pub.track.attach(videoRef.current);
//             }
//           });
//         }
//       });
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const disconnectFromRoom = () => {
//     roomRef.current?.disconnect();
//     roomRef.current = null;
//   };

//   return (
//     <div className="fixed inset-0 bg-black">
//       <video
//         ref={videoRef}
//         autoPlay
//         playsInline
//         muted={false}
//         className="w-full h-full object-cover"
//       />
//     </div>
//   );
// };

// export default LiveKitViewer;
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const LiveVideo = () => {
  const videoRef = useRef(null);
  const roomRef = useRef(null);

  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isLive, setIsLive] = useState(false);

  /* ---------------- INIT ---------------- */
  useEffect(() => {
    connectToRoom();
    return () => disconnectFromRoom();
  }, []);

  /* ---------------- TOKEN ---------------- */
  const getToken = async () => {
    const res = await fetch("https://live-8uvk.onrender.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomName: "live",
        participantName: `viewer-${Math.random()
          .toString(36)
          .substring(7)}`,
      }),
    });

    if (!res.ok) throw new Error("Token fetch failed");
    return res.json();
  };

  /* ---------------- CONNECT ---------------- */
  const connectToRoom = async () => {
    try {
      const { token, url } = await getToken();
      const LiveKit = await import("livekit-client");

      const room = new LiveKit.Room({
        adaptiveStream: true,
        dynacast: true,
      });

      roomRef.current = room;

      /* Track Subscribe */
      room.on("trackSubscribed", (track, _pub, participant) => {
        if (participant.identity !== "camera") return;

        if (track.kind === "video" && videoRef.current) {
          track.attach(videoRef.current);
          setIsLive(true); // ✅ Live detected
        }

        if (track.kind === "audio" && videoRef.current) {
          track.attach(videoRef.current);
        }
      });

      /* Track Unsubscribe */
      room.on("trackUnsubscribed", (track) => {
        track.detach();
        if (track.kind === "video") {
          setIsLive(false); // ❌ Live stopped
        }
      });

      await room.connect(url, token);

      /* Attach already published tracks */
      room.remoteParticipants.forEach((participant) => {
        if (participant.identity === "camera") {
          participant.trackPublications.forEach((pub) => {
            if (pub.isSubscribed && pub.track && videoRef.current) {
              pub.track.attach(videoRef.current);
              if (pub.track.kind === "video") {
                setIsLive(true);
              }
            }
          });
        }
      });
    } catch (e) {
      console.error("LiveKit Viewer error:", e);
    }
  };

  const disconnectFromRoom = () => {
    roomRef.current?.disconnect();
    roomRef.current = null;
  };

  /* ---------------- AUDIO CONTROL ---------------- */
  const enableAudio = async () => {
    try {
      const AudioContext =
        window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      await ctx.resume();

      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1;
      }

      setAudioEnabled(true);
    } catch (e) {
      console.error("Audio enable failed", e);
    }
  };

  const disableAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
    setAudioEnabled(false);
  };

  /* ---------------- UI ---------------- */
  return (
    <div
      className="
      w-[80%] max-w-[2200px]
      m-auto
        mt-[10px]
        bg-black
        md:h-[calc(100vh-110px)]
        min-h-auto
        relative
        overflow-hidden
        rounded-xl
        p-2
      "
    >
      {/* FALLBACK IMAGE */}
      {!isLive && (
        <>
          <img
            src="/images/paper.jpeg"
            alt="Live not started"
            className="w-full h-full object-contain py-0"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xl font-semibold bg-black/60 px-4 py-2 rounded-md">

            </p>
          </div>
        </>
      )}

      {/* LIVE VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={!audioEnabled}
        className={`w-full h-full object-cover ${!isLive ? "hidden" : ""
          }`}
      />

      {/* AUDIO TOGGLE */}
      {isLive && (
        <button
          onClick={audioEnabled ? disableAudio : enableAudio}
          className="absolute bottom-4 right-4 bg-black/70 p-3 rounded-full text-white"
        >
          {audioEnabled ? <Volume2 size={22} /> : <VolumeX size={22} />}
        </button>
      )}
    </div>
  );
};

export default LiveVideo;
