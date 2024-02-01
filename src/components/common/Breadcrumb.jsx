export function Breadcrumb(props) {

    return (
        <>

            <section id="breadcrumbs" class="breadcrumbs">
                <div class="container">

                    <div class="d-flex justify-content-between align-items-center">
                        <h2>{props.title}</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>{props.title}</li>
                        </ol>
                    </div>

                </div>
            </section>

        </>
    )
}