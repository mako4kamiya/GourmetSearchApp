import Header from "../components/Header";

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
            <h2>List</h2>
        </div>
    );
}
export default Filter;