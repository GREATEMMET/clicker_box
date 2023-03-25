import React from 'react'

export default function Box(props){
    const [box, setBox]=React.useState(props.on)
    function toggle(){
        setBox(!box)
    }
    const styles = {
        backgroundColor: box? '#222': 'transparent'

    }
    return(
        <div className='box' style={styles} onClick={toggle}>

        </div>
    )
}