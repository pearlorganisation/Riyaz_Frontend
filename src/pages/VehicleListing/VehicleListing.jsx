import SearchResult from "../../components/SearchResult/SearchResult";
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter";

const VehicleListing = () => {
  return (
    <div>
      <div className="w-full h-[65vh] bg-red-400">
        <h1>Map</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[30%_auto] gap-8">
        <SidebarFilter />
        <SearchResult />
      </div>
    </div>
  );
};

export default VehicleListing;

// <div className="w-[80%] flex items-center justify-center">
//   <div className="bg-white rounded-md flex items-center justify-start">
//     <form>
//       <div className="flex flex-row">
//         <div className="flex flex-col gap-3 w-[32rem]">
//           <label>From</label>
//           <input
//             type="text"
//             placeholder="Enter an airport name or code"
//             className="h-12"
//           />
//         </div>

//         <div className="flex flex-col gap-3 w-[32rem]">
//           <label>To</label>
//           <input
//             type="text"
//             placeholder="Enter an airport name or code"
//             className=""
//           />
//         </div>
//       </div>
//     </form>
//   </div>
// </div>
