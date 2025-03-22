import SearchError_main from "./SearchError/SearchError_main"
import SearchError_mobile from "./SearchError/SearchError_mobile"

export default function SearchError(){
    return(
        <div>
            <div className="hidden md:block">
                <SearchError_main />
            </div>
            <div className="block md:hidden">
                <SearchError_mobile />
            </div>
        </div>
    )
}