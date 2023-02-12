import {ReactElement} from 'react';
import {I18nextProvider} from 'react-i18next';
import {i18nMock} from 'shared/config/i18n';
import {render} from '@testing-library/react';


const renderWithTranslation = (component: ReactElement) => {
    return render(<I18nextProvider i18n={i18nMock}>
        {component}
    </I18nextProvider>);
};


export default renderWithTranslation;
