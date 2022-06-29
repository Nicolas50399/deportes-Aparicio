import { useState } from "react"

const styleContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    flexDirection: 'column'
}

const selectOptions = [
    {
        value: '10',
        description: 'Sumar 10'
    },
    {
        value: '50',
        description: 'Sumar 50'
    },
    {
        value: '100',
        description: 'Sumar 100'
    }
]

const ButtonComponent = ({stock,changeStock}) => {
    return <button onClick={
        () => changeStock(stock+1)
    }>Agregar 1</button>
}

const SelectComponent = ({ stock, changeStock }) => {
    return <select value={stock} onChange={e=> changeStock(e.target.value)}>
        {selectOptions.map(option => <option key={option.description} value={option.value}>{option.description}</option>)}
    </select>
}

const InputComponent = ( { stock, changeStock }) => {
    return (
        <input 
            type="number" 
            value={stock} 
            onChange={(e) => changeStock(e.target.value)}
        />
    );
};

const ShowMessage = ({stock}) => {
    return <h4>{`El stock es ${stock}`}</h4>;
};

const StockContainer = ({ componente:ComponenteCustomizado }) => {
    const [stock, setStock] = useState(0);

    const handleStock = (value) => setStock(value);
    return (
        <section style={styleContainer}>
            <ShowMessage stock={stock} />
            <ComponenteCustomizado stock={stock} changeStock={handleStock} />
        </section>
    );
};

export const EventsExample = () => {
    return <StockContainer componente={SelectComponent} />;
}

const handleSubmit = e => {
    e.preventDefault()
}