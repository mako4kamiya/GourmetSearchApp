import { useState } from "react";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckboxIcon from '@material-ui/core/Checkbox';
import "../css/filter.css";

function FilterForm(props) {
    const [options, setOptions] = useState({
        c01: true,
        c02: false,
        c04: false,
        c06: false,
        c07: false,
        c11: false,
        c12: false,
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
    console.log(options);

    const optionHandleChange = (event) => {
        setOptions({ ...options, [event.target.name]: event.target.checked });
    };

    return (
        <div id="FilterForm">
            <hr/>
            <FormControl>
                <FormLabel>お支払い方法</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={false}
                                onChange={optionHandleChange}
                                name="c01"
                            />}
                        label="VISA"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={false}
                                onChange={optionHandleChange}
                                name="c02"
                            />}
                        label="マスター"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={false}
                                onChange={optionHandleChange}
                                name="c04"
                            />}
                        label="アメックス"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={false}
                                onChange={optionHandleChange}
                                name="c06"
                            />}
                        label="DINERS"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={false}
                                onChange={optionHandleChange}
                                name="c07"
                            />}
                        label="JCB"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={false}
                                onChange={optionHandleChange}
                                name="c12"
                            />}
                        label="銀聯"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={false}
                                onChange={optionHandleChange}
                                name="c12"
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
                                checked={false}
                                onChange={optionHandleChange}
                                name="child"
                            />}
                        label="お子様連れOK"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={false}
                                onChange={optionHandleChange}
                                name="card"
                            />}
                        label="カード可"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={false}
                                onChange={optionHandleChange}
                                name="parking"
                            />}
                        label="駐車場あり"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={false}
                                onChange={optionHandleChange}
                                name="wifi"
                            />}
                        label="Wifiあり"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={false}
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