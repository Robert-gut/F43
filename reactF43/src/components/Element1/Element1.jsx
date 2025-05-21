import SuperButton from "../SuperButton/SuperButton";


export function Element1 (){
    const styles = {
        header: {
            color: 'red',
            textAling: 'center'
        },
        main: {
            color: 'red',
            textAling: 'center'
        },
        footer: {
            color: 'red',
            textAling: 'center'
        },
    }


    const test = () => {
        console.log(1 + 1);
    }

    const objStyle = {
        fontSize: '60px'
    }

    
    return(
        <>
            <h1 className='test' style={objStyle} >Element1</h1>
            <p style={styles.header} onClick={ () => console.log('it is <p>')}>Lorem ipsum dolor sit amet.</p>
            
            <SuperButton title='console.log'/>
            
           
            <SuperButton title='NameBtn' bg='green' color='black' />

            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="test"/>
            </div>

            <button onClick={test}>test events</button>
        </>
    )
}

