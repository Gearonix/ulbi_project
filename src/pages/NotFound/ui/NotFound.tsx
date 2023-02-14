import {RCC} from 'shared/types'
import {useLanguage} from 'shared/lib/hooks'
import {languageChunks} from 'shared/config'

interface NotFoundProps {

}


const NotFound: RCC<NotFoundProps> = () => {
  const {t} = useLanguage(languageChunks.NOT_FOUND)
  return <div>
    <h1>{t('Page not found')}</h1>
  </div>
}


export default NotFound
