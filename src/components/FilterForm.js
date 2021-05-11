import { useEffect, useState } from "react";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckboxIcon from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import "../css/filter.css";
const optionData = {
    c01: false,
    c02: false,
    c04: false,
    c06: false,
    c07: false,
    c11: false,
    c12: false,
    child: false,
    card: false,
    parking: false,
    wifi: false,
    private_room: false,
    tatami: false,
    non_smoking: false,
    barrier_free: false,
    lunch: false,
    english: false,
    pet: false,
    range:""
};


function FilterForm(props) {
    const [options, setOptions] = useState(null);
    const [open, setOpen] = useState(false);
    console.log(options);
    const {c01, c02, c04, c06, c07, c11, c12,
            child, card, parking, wifi, private_room,
            tatami, non_smoking, barrier_free, lunch, english, pet, range } = "" ;

    const handleChange = (event) => {
        console.log(event)
        if(event.target.name == "range"){
            setOptions({ ...options, [event.target.name]: event.target.value });
        }else {
            setOptions({ ...options, [event.target.name]: event.target.checked });
        }
    };

    const handleClose = () => {
        setOpen(false);
      };

      const handleOpen = () => {
        setOpen(true);
      };
    
    function createQuery(options) {
        let newQuery = "";
        Object.entries(options).forEach(([key, value]) => {
            if (value) {
                newQuery += `&${key}=${value}`;
            }
        })
        console.log(newQuery);
        props.setOption(newQuery);
    }

    useEffect(() => {
        if (!options){
            setOptions(optionData);
            console.log("optionsセット");
        }
    },[]);

    return (
        <div id="FilterForm">
            <FormControl>
                <FormLabel>お支払い方法</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={c01}
                                onChange={handleChange}
                                name="c01"
                            />}
                        label="VISA"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={c02}
                                onChange={handleChange}
                                name="c02"
                            />}
                        label="マスター"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={c04}
                                onChange={handleChange}
                                name="c04"
                            />}
                        label="アメックス"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={c06}
                                onChange={handleChange}
                                name="c06"
                            />}
                        label="DINERS"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={c07}
                                onChange={handleChange}
                                name="c07"
                            />}
                        label="JCB"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={c11}
                                onChange={handleChange}
                                name="c11"
                            />}
                        label="銀聯"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={c12}
                                onChange={handleChange}
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
                                checked={child}
                                onChange={handleChange}
                                name="child"
                            />}
                        label="お子様連れOK"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={card}
                                onChange={handleChange}
                                name="card"
                            />}
                        label="カード可"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={parking}
                                onChange={handleChange}
                                name="parking"
                            />}
                        label="駐車場あり"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={wifi}
                                onChange={handleChange}
                                name="wifi"
                            />}
                        label="Wifiあり"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={private_room}
                                onChange={handleChange}
                                name="private_room"
                            />}
                        label="個室あり"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={tatami}
                                onChange={handleChange}
                                name="tatami"
                            />}
                        label="座敷あり"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={non_smoking}
                                onChange={handleChange}
                                name="non_smoking"
                            />}
                        label="禁煙席あり"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={barrier_free}
                                onChange={handleChange}
                                name="barrier_free"
                            />}
                        label="バリアフリー"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={lunch}
                                onChange={handleChange}
                                name="lunch"
                            />}
                        label="ランチあり"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={english}
                                onChange={handleChange}
                                name="english"
                            />}
                        label="英語メニューあり"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={pet}
                                onChange={handleChange}
                                name="pet"
                            />}
                        label="ペット可"
                    />
                    <FormControlLabel
                        control={
                            <CheckboxIcon
                                checked={private_room}
                                onChange={handleChange}
                                name="private_room"
                            />}
                        label="個室あり"
                    />
                </FormGroup>
            </FormControl>
            <hr/>
            <FormControl>
                <FormLabel>検索範囲</FormLabel>
                <FormGroup>
                    <Select
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        onChange={handleChange}
                        defaultValue={3}
                        name={"range"}
                    >
                        <MenuItem checked={1} value={1}>300m</MenuItem>
                        <MenuItem checked={2} value={2}>500m</MenuItem>
                        <MenuItem checked={3} value={3}>1km</MenuItem>
                        <MenuItem checked={4} value={4}>2km</MenuItem>
                        <MenuItem checked={5} value={5}>3km</MenuItem>
                    </Select>
                </FormGroup>
            </FormControl>
            <Button variant="contained" color="primary" onClick={() => { createQuery(options) }}>
                適応する
            </Button>
        </div>
    );
}
export default FilterForm;