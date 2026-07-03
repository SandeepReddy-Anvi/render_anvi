
import { Link } from "react-router-dom";

const BreadCrumb = ({ showHeader, location }) => {
  const validPaths = {
    "/industries/energy": "Energy",
    "/industries/textiles": "Textiles",
    "/industries/social_impact": "Social Impact",
    "/industries/lifesciences": "Life Sciences",
    "/industries/semiconductors": "Semi Conductors",
    "/industries/entertainment": "Entertainment",

    "/solutions/arop": "Arop",
    "/solutions/sewage": "Sewage",
    "/solutions/anvi-build": "Anvi Build",
    "/solutions/ai-defect": "AI-Defect",
    "/solutions/auto-investment": "Auto Investment",

    "/careers/job-openings": "Job Openings",
    
    // Special case (array = custom breadcrumb)
    "/collective": ["NewsRoom", "Collective"],
  };

  const currentPath = location.pathname;

  // Hide if not allowed
  if (!validPaths[currentPath]) return null;

  const pathSegments = currentPath.split("/").filter(Boolean);

  if (pathSegments.length === 0) return null;

  // Formatter
  const formatSegment = (text) => {
    return text
      .replace(/[_-]/g, " ")
      .split(" ")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
  };

  let breadcrumbLabels = [];

  // ================================
  // SPECIAL CASE (Array)
  // ================================
  if (Array.isArray(validPaths[currentPath])) {
    breadcrumbLabels = validPaths[currentPath];
  }

  // ================================
  // NORMAL CASE (String)
  // ================================
  else {
    breadcrumbLabels = pathSegments.map((segment, index) => {
      const fullPath = `/${pathSegments
        .slice(0, index + 1)
        .join("/")}`;

      if (validPaths[fullPath]) {
        return validPaths[fullPath];
      }

      return formatSegment(segment);
    });
  }

  return (
    <div
      className={`w-full bg-[#F8F8F8] border-b border-[#eeeeee] font-raleway px-4 lg:px-[40px] py-[8px] sticky z-[50] transition-all duration-300 ease-in-out ${
        showHeader
          ? "top-[80px] lg:top-[101px] translate-y-0 opacity-100"
          : "top-0 -translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <nav>
        <ul className="flex items-center list-none m-0 p-0 overflow-x-auto no-scrollbar">
          {breadcrumbLabels.map((label, index) => {
            let routeTo = "";

            // Routes for special case
            if (Array.isArray(validPaths[currentPath])) {
              routeTo =
                index === 0 ? "/news" : currentPath;
            }

            // Routes for normal case
            else {
              routeTo = `/${pathSegments
                .slice(0, index + 1)
                .join("/")}`;
            }

            const isLast =
              index === breadcrumbLabels.length - 1;

            return (
              <li
                key={`${routeTo}-${index}`}
                className="flex items-center whitespace-nowrap"
              >
                {/* Separator */}
                {index !== 0 && (
                  <span className="px-[12px] text-[#999] text-[14px]">
                    {">"}
                  </span>
                )}

                <span
                  className={`${
                    isLast
                      ? "text-[#333] font-semibold"
                      : "text-[#666]"
                  } text-[14px]`}
                >
                  {isLast ? (
                    label
                  ) : (
                    <Link to={routeTo} className="hover:text-black">
                      {label}
                    </Link>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default BreadCrumb;




// import { Link } from "react-router-dom";
// import { mainPagesLinksObj } from "../data/PagesLinkList";

// const BreadCrumb = ({location, showHeader}) => {
//   const currentPath = location.pathname;
//   const pathSegments = currentPath.split("/").filter(Boolean);

//   const categoryMap = {
//     "/industries/energy": "Industries",
//     "/industries/textiles": "Industries",
//     "/industries/social_impact": "Industries",
//     "/industries/lifesciences": "Industries",
//     "/industries/semiconductors": "Industries",
//     "/industries/entertainment": "Industries",
//     "/solutions/arop": "Solutions",
//     "/solutions/sewage": "Solutions",
//     "/careers/job-openings": "Careers",
//     // Match the exact key from your pagesLinksObj
//     "/collective": "News",
//   };

//   let parentName = null;

//   // 1. Check the direct map first
//   if (categoryMap[currentPath]) {
//     parentName = categoryMap[currentPath];
//   }
//   // 2. Fallback to prefix checks
//   else if (currentPath.startsWith("/careers")) {
//     parentName = "Careers";
//   } else if (currentPath.startsWith("/solutions")) {
//     parentName = "Solutions";
//   } else if (currentPath.startsWith("/news")) {
//     parentName = "News";
//   }

//   // Hide on main roots - add /collective to this list if you want it hidden there too,
//   // but keep it out if you want "News > Collective" to show on that page.
//   const mainRoots = [
//     "/",
//     "/aboutus",
//     "/investors",
//     "/news",
//     "/contactus",
//     "/industries",
//     "/solutions",
//     "/careers",
//   ];

//   if (mainRoots.includes(currentPath) || !parentName) return null;

//   return (
//     <div
//       className={`w-full bg-[#F8F8F8] border-b border-[#eeeeee] font-raleway px-4 lg:px-[40px] py-[8px] sticky z-[50] transition-all duration-300 ease-in-out ${
//         showHeader
//           ? "top-[80px] lg:top-[101px] translate-y-0 opacity-100"
//           : "top-0 -translate-y-full opacity-0 pointer-events-none"
//       }`}
//     >
//       <nav className="flex items-center">
//         <ul className="flex items-center list-none m-0 p-0 overflow-x-auto no-scrollbar">
//           {/* Parent Category */}
//           <li className="text-[#666] whitespace-nowrap text-[14px] font-medium capitalize">
//             <Link
//               to={
//                 mainPagesLinksObj[
//                   parentName === "News" ? "NewsRoom" : parentName
//                 ] || "/"
//               }
//               className="hover:text-black transition-colors"
//             >
//               {parentName}
//             </Link>
//           </li>

//           {/* Child Levels */}
//           {pathSegments.map((segment, index) => {
//             // Logic to prevent "News > News" or "News > Newsroom"
//             const isRedundant =
//               segment.toLowerCase() === parentName.toLowerCase() ||
//               (parentName === "News" && segment.toLowerCase() === "news");

//             if (isRedundant && index === 0) return null;

//             const routeTo = `/${pathSegments.slice(0, index + 1).join("/")}`;
//             const isLast = index === pathSegments.length - 1;
//             const cleanName = segment.replace(/-/g, " ");

//             return (
//               <div
//                 key={routeTo}
//                 className="flex items-center whitespace-nowrap"
//               >
//                 <span className="px-[12px] text-[#999] font-light text-[14px]">
//                   {">"}
//                 </span>
//                 <span
//                   className={`${isLast ? "text-[#333] font-semibold" : "text-[#666]"} text-[14px] capitalize`}
//                 >
//                   {isLast ? (
//                     cleanName
//                   ) : (
//                     <Link to={routeTo} className="hover:text-black">
//                       {cleanName}
//                     </Link>
//                   )}
//                 </span>
//               </div>
//             );
//           })}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default BreadCrumb;


