import Header from "../components/Header";
import FilterForm from "../components/FilterForm";

const headerTitle = "絞り込み検索";
const headerLeft = <span className="headerSpan">戻る</span>;
const headerLeftPath = "/"

function Filter(props) {
    return (
        <div id="List">
            <Header
                headerTitle={headerTitle}
                headerLeft= {headerLeft}
                headerLeftPath={headerLeftPath}
            />
            <FilterForm setOption={props.setOption}/>
        </div>
    );
}
export default Filter;