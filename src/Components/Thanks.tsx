import watches09 from '../assets/images/watches/9.svg';
import watches10 from '../assets/images/watches/10.png';

const Thanks = () => {
    return (
        <div className="thanks">
            <img className="thanks__img thanks__img--left" src={watches09} alt="watches" />
            <div className="thanks__inner container">
                <div className="step-title thanks__title">
                    Thank you for filling out the form!
                </div>
                <div className="thanks__text">
                    We will review your information and contact you as soon as possible.
                    You can download a PDF with your data, book a call.
                </div>
                <div className="thanks__buttons">
                    <a href="#" className="btn next-btn download-pdf">
                        Download a PDF
                    </a>
                    <a href="#" className="btn back-btn book-call">
                        Book a call
                    </a>
                </div>
            </div>
            <img className="thanks__img thanks__img--right" src={watches10} alt="watches" />
        </div>
    );
};

export default Thanks;