import Header from "../components/Header";
import RoomIcon from '@material-ui/icons/Room';
import FilterNoneIcon from '@material-ui/icons/FilterNone';

const headerTitle = "周辺の検索";
const headerLeft = <RoomIcon/>;
const headerLeftPath = "/home";
const headerRight = <FilterNoneIcon />;

function List() {
    return (
        <div id="List">
            <Header
                headerTitle={headerTitle}
                headerLeft= {headerLeft}
                headerLeftPath={headerLeftPath}
                headerRight={headerRight}
            />
            <h2>List</h2>


            
        </div>
    );
}
export default List;