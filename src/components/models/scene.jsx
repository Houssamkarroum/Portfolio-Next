/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: zacben590 (https://sketchfab.com/zacben590)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/eren-yager-3c0bc7d9fb3c46d39fb9cd8620d0b818
Title: EREN YAGER
*/
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { useFrame } from '@react-three/fiber'
export default function Scene(props) {
  const { nodes, materials } = useGLTF('/models/scene-transformed.glb')
  const modelRef = useRef();

  useFrame((state,delta,xrFrame) => {

    modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime)*0.23 ;
     })

  return (
    <group {...props} dispose={null}    position={[0,-1.4,0]}
    scale={[0.15,0.15,0.15]} rotation={[0.24,0.0,0]}  ref={modelRef} >
      <primitive object={nodes._rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_283.geometry}
        material={materials.Face}
        skeleton={nodes.Object_283.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_284.geometry}
        material={materials['skin-headtopsLT']}
        skeleton={nodes.Object_284.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_285.geometry}
        material={materials['nail-finger']}
        skeleton={nodes.Object_285.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_286.geometry}
        material={materials['cardigan-long']}
        skeleton={nodes.Object_286.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_287.geometry}
        material={materials['topsLTout-lacecardigan']}
        skeleton={nodes.Object_287.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_288.geometry}
        material={materials.bottomsw}
        skeleton={nodes.Object_288.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_289.geometry}
        material={materials['ankleboots-gum']}
        skeleton={nodes.Object_289.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_290.geometry}
        material={materials['ankleboots-metal']}
        skeleton={nodes.Object_290.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/scene-transformed.glb')