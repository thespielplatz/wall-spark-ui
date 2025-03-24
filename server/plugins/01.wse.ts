import { colors, Config, Fill, Time } from '@thespielplatz/wall-spark-engine'
import path from 'path'

import useWSE, { initWSE } from '../utils/useWSE'
import SateLogo from '../lib/logos/SateLogo'
import TheSpielplatzLogo from '../lib/logos/TheSpielplatzLogo'

const LOGO_PADDING = 1

export default defineNitroPlugin(() => {
  console.log('01 WallSparkEngine init')

  const configFile = path.join(process.cwd(), 'config.json')
  console.info('Loading config from:', configFile)

  const config = new Config({ configFile })
  initWSE(config)

  const gameEngine = useWSE()
  gameEngine.addGameObject(new Fill({ color: colors.BLACK }))

  const leftLogo = new SateLogo({ x: 0, y: 0 })
  gameEngine.addGameObject(leftLogo)

  const rightLogo = new TheSpielplatzLogo({ x: 0, y: 0 })
  rightLogo.x = config.config.width - rightLogo.width - LOGO_PADDING
  gameEngine.addGameObject(rightLogo)

  const time = new Time({
    x: 0,
    y: 0,
    showSeconds: true,
    centerOnWidth: config.config.width,
  })
  gameEngine.addGameObject(time)
  gameEngine.start()
})