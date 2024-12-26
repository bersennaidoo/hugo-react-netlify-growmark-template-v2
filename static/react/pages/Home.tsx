import React, { FC } from "react"


type HomePageProps = {}

const HomePage: FC<HomePageProps> = (props: HomePageProps) => {
    const { } = props

    return (
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <img src="/img/project-2.jpg" className="img-fluid" />
            </div>
             <div className="col-sm-12 col-md-6">
                <img src="/img/project-1.jpg" className="img-fluid" />
            </div>
        </div>
    )
}

export default HomePage