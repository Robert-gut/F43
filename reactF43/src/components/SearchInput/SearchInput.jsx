import SuperButton from "../SuperButton/SuperButton";

export default function SearchInput({labelName, placeholder, nameBtn}) {
    return(
        <div>
            <label htmlFor="search">{labelName}</label>
            <input id="search" placeholder={placeholder}  type="text" />
            <SuperButton title={nameBtn} bg='green' color='black' />
        </div>
    )
}