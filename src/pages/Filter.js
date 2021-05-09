import Header from "../components/Header";
import FilterForm from "../components/FilterForm";

const headerTitle = "絞り込み検索";
const headerLeft = "キャンセル";
const headerLeftPath = "/home"
const headerRight = "適応";

function Filter() {
    return (
        <div id="List">
            <Header
                headerTitle={headerTitle}
                headerLeft= {headerLeft}
                headerLeftPath={headerLeftPath}
                headerRight={headerRight}
            />
            <FilterForm />
        </div>
    );
}
export default Filter;