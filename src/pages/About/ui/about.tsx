import {FC} from 'react';
import {useLanguage} from 'shared/lib/hooks';

const About: FC = () => {
    const {t} = useLanguage('about');
    return <div>
        {t('aboutTranslation')}
    </div>;
};

export default About;
