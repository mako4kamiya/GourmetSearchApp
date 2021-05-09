import { useState } from "react";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckboxIcon from '@material-ui/core/Checkbox';
import "../css/checkbox.css";

function FilterForm() {
    const [checkedLists, setcheCkedLists] = useState("");
    const [options, setOptions] = useState({
        VISA: true,
        マスター: false,
        アメックス: false,
        DINERS: false,
        JCB: false,
        銀聯: false,
        Discover: false,
        child: true,
        card: false,
        parking: false,
        wifi: false,
        private_room: false,
        horigotatsu: false,
        tatami: false,
        non_smoking: false,
        barrier_free: false,
        lunch: false,
        english: false,
        pet: false
    });
    const {
        VISA,
        マスター,
        アメックス,
        DINERS,
        JCB,
        銀聯,
        Discover,
        child,
        card,
        parking,
        wifi,
        private_room,
        horigotatsu,
        tatami,
        non_smoking,
        barrier_free,
        lunch,
        english,
        pet
    } = options;
    

    console.log(options);

    const optionHandleChange = (event) => {
        setOptions({ ...options, [event.target.name]: event.target.checked });
    };

    // useEffect(()=>{
    //     options.forEach(option => {
    //         if(option == true){
    //             setcheCkedLists([ ...checkedLists, {option: option} ]);
    //         }
    //     }
    // },[options]);

    return (
        <div id="FilterForm">
            <hr/>
            <FormControl>
                <FormLabel>お支払い方法</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={VISA}
                                onChange={optionHandleChange}
                                name="VISA"
                                value="c01"
                            />}
                        label="VISA"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={マスター}
                                onChange={optionHandleChange}
                                name="マスター"
                                value="c02"
                            />}
                        label="マスター"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={アメックス}
                                onChange={optionHandleChange}
                                name="アメックス"
                                value="c04"
                            />}
                        label="アメックス"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={DINERS}
                                onChange={optionHandleChange}
                                name="DINERS"
                                value="c06"
                            />}
                        label="DINERS"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={JCB}
                                onChange={optionHandleChange}
                                name="JCB"
                                value="c07"
                            />}
                        label="JCB"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={銀聯}
                                onChange={optionHandleChange}
                                name="銀聯"
                                value="c12"
                            />}
                        label="銀聯"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={Discover}
                                onChange={optionHandleChange}
                                name="Discover"
                                value="c12"
                            />}
                        label="Discover"
                    />
                </FormGroup>
            </FormControl>
            <hr/>
            <FormControl>
                <FormLabel>検索オプション</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={child}
                                onChange={optionHandleChange}
                                name="child"
                            />}
                        label="お子様連れOK"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={card}
                                onChange={optionHandleChange}
                                name="card"
                            />}
                        label="カード可"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={parking}
                                onChange={optionHandleChange}
                                name="parking"
                            />}
                        label="駐車場あり"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={wifi}
                                onChange={optionHandleChange}
                                name="wifi"
                            />}
                        label="Wifiあり"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={private_room}
                                onChange={optionHandleChange}
                                name="private_room"
                            />}
                        label="個室あり"
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
}
export default FilterForm;