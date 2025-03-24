import assert from 'node:assert'
import type { Config } from '@thespielplatz/wall-spark-engine'
import { GameEngine } from '@thespielplatz/wall-spark-engine'

let gameEngine: GameEngine | null = null

export const initWSE = (config: Config) => {
  gameEngine = new GameEngine(config.config)
}

export const useWSE = (): GameEngine => {
  assert(gameEngine, 'GameEngine not initialized')
  return gameEngine
}

export default useWSE
