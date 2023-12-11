
import { FaRegHandshake } from "react-icons/fa"
import { FaDesktop } from "react-icons/fa6";

const Services = () => {
  return (
    <div className='services-con'>
        <h3><FaRegHandshake className="service-icon"/>Services</h3>
        <div className="service-list">
            <div className="service">
                <FaDesktop className="service-i" />
                <div className="service-description">
                    <h4>Frontend Designer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolor veniam rem quo non officia laborum, aspernatur veritatis alias odit. Voluptates rerum optio veritatis itaque quam, unde ut atque illum cupiditate quidem sunt sint nostrum repellendus amet voluptatibus, temporibus beatae. Natus pariatur fugiat ab suscipit sint cum placeat facere doloribus.</p>
                </div>
            </div>
            <div className="service">
                <FaDesktop className="service-i" />
                <div className="service-description">
                    <h4>Frontend Designer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolor veniam rem quo non officia laborum, aspernatur veritatis alias odit. Voluptates rerum optio veritatis itaque quam, unde ut atque illum cupiditate quidem sunt sint nostrum repellendus amet voluptatibus, temporibus beatae. Natus pariatur fugiat ab suscipit sint cum placeat facere doloribus.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
