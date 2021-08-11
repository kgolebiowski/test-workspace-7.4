import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// import ClayButton from '@clayui/button';
import ClayDatePicker from '@clayui/date-picker';

const spritemap = themeDisplay.getPathThemeImages() + '/lexicon/icons.svg';

const ClayDatePickerComponent = () => {
    const [value, setValue] = useState(null);

    return (
        <ClayDatePicker
            onValueChange={setValue}
            placeholder="YYYY-MM-DD"
            spritemap={spritemap}
            value={value}
            years={{
                end: 2024,
                start: 1997
            }}
        />
    );
};

const Application = (props) => {
    // const [companies, setCompanies] = useState([]);

    // useEffect(() => {
    //     Liferay.Service(
    //         '/company/get-companies',
    //         (data) => setCompanies(data)
    //     );
    // }, []);

    return <div>
        <h1>Hello from functional component</h1>

        {/*{companies.length > 0 &&*/}
        {/*<div>*/}
        {/*    <h2>Companies</h2>*/}
        {/*    <ul>*/}
        {/*        {companies.map((company) => (*/}
        {/*            <li>{company.webId}, {company.companyId}</li>*/}
        {/*        ))}*/}
        {/*    </ul>*/}
        {/*</div>*/}
        {/*}*/}

        {/*<ClayButton displayType="primary">*/}
        {/*    Button*/}
        {/*</ClayButton>*/}

        <h1>Is the ClayDatePicker coming up here?</h1>

        <ClayDatePickerComponent />
    </div>;
}

export default function (elementId) {
    ReactDOM.render(<Application/>, document.getElementById(elementId));
}