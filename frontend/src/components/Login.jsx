import React from 'react'

function Login() {
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box p-10">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-4xl">Login</h3>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span><br />
                        <input type="email" name="email" placeholder="Enter your Email" className="w-full mt-1 px-3 py-1 border rounded-md outline-none" />
                    </div>
                    <div className='mt-4 mb-5'>
                        <span >Password</span><br />
                        <input type="password" name="password" placeholder="Password" className="w-full mt-1 px-3 py-1 border rounded-md outline-none" />
                    </div>
                    <div className='flex justify-around'>
                        <button className="btn text-xl btn-primary">Login</button>
                        <p>Not registered {" "} <span className='text-pink-400 font-bold'>Signup</span></p>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Login
