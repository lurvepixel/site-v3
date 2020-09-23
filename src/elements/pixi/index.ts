import dynamic from 'next/dynamic'
import type { ComponentType } from 'react'
import type { _ReactPixi } from '@inlet/react-pixi'

type StageType = ComponentType<_ReactPixi.IStage>

export const Stage = dynamic(() => import('@inlet/react-pixi').then(mod => mod.Stage), {
  ssr: false,
}) as StageType

export const Sprite = dynamic(() => import('@inlet/react-pixi').then(mod => mod.Sprite), {
  ssr: false,
})
