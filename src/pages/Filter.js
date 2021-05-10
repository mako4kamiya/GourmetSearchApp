import Header from "../components/Header";
import FilterForm from "../components/FilterForm";

const headerTitle = "絞り込み検索";
const headerLeft = <span className="headerSpan">キャンセル</span>;
const headerLeftPath = "/"
const headerRight = <span className="headerSpan">適応</span>;

function Filter(props) {
    return (
        <div id="List">
            <Header
                headerTitle={headerTitle}
                headerLeft= {headerLeft}
                headerLeftPath={headerLeftPath}
                headerRight={headerRight}
            />
            <FilterForm createQuery={props.createQuery}/>
        </div>
    );
}
export default Filter;