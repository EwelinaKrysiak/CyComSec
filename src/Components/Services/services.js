import React, {Component} from "react";
import "./services.scss"
import servicesImg1 from "../../Images/grafiki/5.1.png";
import servicesImg2 from "../../Images/grafiki/2.1.png";
import servicesImg3 from "../../Images/grafiki/4.1.png"


class Services extends Component {

    state = {
        openService: {
            tele: true,
            cyberSec: true,
            digitalization: true
        }
    };

    toggleService = (name) => {
        this.setState(prevState => {
            const openServiceCopy = {...prevState.openService};
            openServiceCopy[name] = !openServiceCopy[name];
            return {
                openService: openServiceCopy
            }
        })
    };


    handleOnChange = (e) => {
        this.setState({style: "height: 150px"})
    };


    render() {
        const {id} = this.props;

        return (

            <div className='services-container' id={id} offset='150'>
                <div className='services-section'>
                    <div id="img-before">
                        <img className='services-img' src={servicesImg2}
                             alt={"CyComSec CyberSecurity Designed by fullvector / Freepik"}/>
                    </div>
                    <div className="text-box">
                        <h1>Cyber Security</h1>
                        <p><span> mUnit / SIEM / SOC / SCADvance / PenTests / Audits </span> <br/>

                        </p>
                        <button onClick={() => this.toggleService("cyberSec")}> More Info</button>
                    </div>

                    <div className={this.state.openService.cyberSec ? "el-hidden" : "el-shown"} style={this.state}>
                        <div><span>mUnit</span> is an innovative solution developed by Cyberteq for cybersecurity
                            assurance. Through its revolutionary concept, mUnit re-shapes the way of handling
                            cybersecurity by replacing traditional assessment reports with an active mitigation plan. It
                            allows the management to have visibility on vulnerabilities level and related risk/business
                            impact.
                        </div>
                        <div><span>SIEM</span> – Security Information and Event Management provide real-time analysis of
                            security alerts generated by applications and network hardware. SIEM as solution appliance
                            on mUnit detects, handles and reports when customer’s systems and applications are
                            compromised, attacked , exploited, probed .
                        </div>
                        <div>
                            <span>SOC</span> – Security Operation Centre based on mUnit provide situational awareness
                            through the detection, containment, and remediation of IT threats. Embedded processes and
                            supportive work-flow ensure that all threats are properly identified, analysed,
                            communicated, investigated and reported.
                        </div>

                        <div> Polish cybersecurity system for <span>SCADA/OT</span> networks, built in cooperation with
                            recognized national scientific units and data centres. Using the latest technological
                            solutions, it allows to detect anomalies and cyber threats in industrial automation networks
                            before they make irreparable damage.
                        </div>

                        <div>
                            An hoc or periodic Security Audits and Penetration Tests are recommended and advised
                            assessment of customer’s IT environment components. Depending on the scope can be executed
                            automatically or manually and uncover physical, software and human vulnerabilities
                        </div>
                    </div>

                </div>
                <div className='services-section'>

                    <div className="text-box">
                        <h1>Telecomunication</h1>
                        <p><span>Design / Planning / CW / Deploy / In/Out Door DAS /PM</span> <br/>

                        </p>
                        <button onClick={() => this.toggleService("tele")}> More Info</button>
                    </div>
                    <div className='services-img-box'>
                        <img className='services-img' src={servicesImg1}
                             alt={"CyComSec Telecommunication Designed by fullvector / Freepik"}/>
                    </div>
                    <div className={this.state.openService.tele ? "el-hidden" : "el-shown"} style={this.state}>
                        <div><span>Network Design and Planning. </span> As an agile organisation we provide our services
                            and
                            solution with high efficiency and optimized total cost of ownership. Our design and outcome
                            of
                            planning process ensures that customer's requirements are met, network solutions are fully
                            integrable, ready to perform according to defined expectations and finally – opex for
                            operations
                            is minimized.

                        </div>
                        <div> Our <span>Deployment and Civil Works </span>processes support network rollout/swap „need
                            for
                            speed” must-haves. Moreover - rapid response is accompanied by flexibility and quality.
                            Customers are benefiting from delivery of civil works on time, cellular and wireless
                            broadband
                            network infrastructure installed with quality focus and with flexibility when resource
                            availability is key. Customers apricate when we simplify deployment, accelerate
                            implementation
                            and foster operation

                        </div>
                        <div>
                            <span>Indoor and Outdoor DAS</span> Coverage is what clients explore and consume. Repeaters
                            ,
                            micro – and small cells, wifi spots, DAS – Distributed/Digital Antenna Systems are delivered
                            in
                            turnkey wherever needed : in-building, offices, venues, factories, suburbs or rural. We
                            provide
                            expert design, deployment, systems integration, and post-implementation support .

                        </div>

                        <div><span>PM</span> Helping our customers makes us successful. Vital mean of it is Project
                            Management which covers wide spectrum of tasks to do the job right. That includes studies
                            such as feasibility and financial planning, sourcing of needed recourses , managing the
                            logistics, installation, integration, commissioning, acceptance, putting in commercial
                            operation and transfer of live network element into maintenance process. We secure E2E PM
                            with clear communication with our Customer.

                        </div>
                    </div>
                </div>

                <div
                    className='services-section'>
                    <div>
                        < img
                            className='services-img'
                            src={servicesImg3}
                            alt={"CyComSec Digital Transformation Designed by fullvector / Freepik"}/>
                    </div>
                    <div className="text-box">
                        <h1>Digital Transformation</h1>
                        <p><span>Ind 4.0 / IoT / RPA / Smart Coverage </span> <br/>

                        </p>
                        <button onClick={() => this.toggleService("digitalization")}> More Info</button>
                    </div>

                    <div className={this.state.openService.digitalization ? "el-hidden" : "el-shown"}
                         style={this.state}>
                        <div><span>Industry 4.0</span> and fourth industrial revolution requires cyber-physical
                            systems delivering autonomy and automation in manufacturing. All connected by
                            reliable
                            wireless networks in secured IT environment

                        </div>
                        <div><span>Internet of Things</span> takes off at last. Availability of sensors,
                            connectivity and applications requires only Customer’s Idea. The rest is with us –
                            to
                            make it real though analysis, advisory, design, prototyping, development,
                            implementation
                            followed operation and maintenance.
                        </div>
                        <div>
                            <span> RPA – Robotic Process Automation</span> delivers time and cost effectiveness
                            to
                            customer’s business processes. Virtual robots emulate human actions, as IP based and
                            programmable make execution repetitive and being non intrusive, do not change
                            existing
                            systems and processes.
                        </div>
                        <div><span> Smart Coverage </span> e2e services are targeted at delivering sustainable
                            and
                            efficient radio coverage to support customer’s business. That includes
                            implementation in
                            existing technologies and reediness for those to come, such as private 5G for
                            industry.
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Services;

