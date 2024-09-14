import React from 'react'
import { useSelector } from 'react-redux'
import { TbFaceIdError } from "react-icons/tb";
function Shimmer() {
    const error = useSelector(state => state.weather.errorMessage)

    return (
        <div className='px-2'>
            <div
                style={{ height: "160px" }}
                className="bg-light my-3 rounded d-flex align-items-center justify-content-center"
            >
                {error === "loading" ?
                    <>
                        <div class="spinner-border color-success" role="status">
                        </div>
                    </> :
                    <div className='text-center'>
                        <TbFaceIdError style={{fontSize:"50px"}}/>
                        <h1>4o4</h1>
                        <h3>page not found</h3>
                    </div>
                }
            </div>
            <div
                style={{ height: "400px" }}

                className="p-5 bg-light my-3 rounded">

            </div>
        </div>
    )
}

export default Shimmer
