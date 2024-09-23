
const init = async () => {
    await Clerk.load()

    document.getElementById('app').innerHTML = `
    <div id="sign-in"></div>
  `

    const signInDiv = document.getElementById('sign-in')

    // Clerk.mountSignIn(signInDiv, { appearance: {
    //         elements: {
    //             footerAction: { display: "none"  },
    //         },
    //     } })
    Clerk.mountSignIn(signInDiv);
}


window.addEventListener('load', async function () {
    await init();
})
