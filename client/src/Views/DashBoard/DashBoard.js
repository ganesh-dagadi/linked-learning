import './DashBoard.css'
function DashBoard(props) {
    return (
        <div className="container">

            <div className="search">
                <div class=" search-bar col-12 col-md-10 col-lg-8">
                    <form class="card card-sm">
                        <div class="card-body row no-gutters align-items-center">

                            <div class="col">
                                <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" />
                            </div>

                            <div class="col-auto">
                                <button class="btn btn-lg btn-success" type="submit">Search</button>
                            </div>

                        </div>
                    </form>
                </div>

                <div className="by-category">
                    <h1>Search by category</h1>
                    <div className="row">
                        <div className="col-lg-2">
                            <button>IT/Software</button>
                        </div>
                        <div className="col-lg-2">
                            <button>Music</button>
                        </div>
                        <div className="col-lg-2">
                            <button>Art</button>
                        </div>
                        <div className="col-lg-2">
                            <button>Career</button>
                        </div>
                        <div className="col-lg-2">
                            <button>Self help</button>
                        </div>
                        <div className="col-lg-2">
                            <button>Engineering</button>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className='get-learning'>
                <h1>Get back to learning</h1>
            </div>



        </div>
    )
}

export default DashBoard