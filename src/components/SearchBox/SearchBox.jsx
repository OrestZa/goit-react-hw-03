import css from './SearchBox.module.css'

export default function SearchBox({ searchTerm, onChange }) {
    return (
        <div><p>Find Contact by name</p>
            <input className={css.input} type="text" value={searchTerm} onChange={onChange} /></div>
    )
}