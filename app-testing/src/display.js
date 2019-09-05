import React from 'react';

export default function Display (props){
    return(
        <div>
            <h1>Displayed Counts</h1>
                <div>
                    {props.balls}
                    {props.strikes}
                    {props.fouls}
                    {props.hits}
                </div>
        </div>
    )
}