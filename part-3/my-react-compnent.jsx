export default function MyReactComponent(){
    return{
        <>
            <h1>my heading</h1>
            <section>
                my content
            </section>
        </>
    }
}

const anothercomponent =()=>{
    return{
        <>
            <MyReactComponent />
        </>
    }
}