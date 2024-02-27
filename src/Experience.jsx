import { Text, Html, ContactShadows, OrbitControls, Float, Environment, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function Experience()
{
    // const { position, rotation } = useControls({
    //     position:
    //     {
    //         value: { x: -0.71, y: -0.08, z: -0.42 },
    //         step: 0.001
    //     },
    //     rotation:
    //     {
    //         value: { x: -0.17, y: 0, z: 0 },
    //         step: 0.001
    //     }
    // })

    const computer = useGLTF('./laptop/scene.gltf')
    const { scene, gl } = useThree();
    useEffect(() => {
        computer.scene.traverse((child) => {
            if (child.material) {
                child.material.envMap = gl.environment;
                child.material.envMapIntensity = 12;
                child.material.needsUpdate = true;
            }
        });
    }, [computer, gl.environment]);

    return <>
        {/* <Perf position="top-left" /> */}

        <Environment
            files="./environment/5.hdr"
        />

        <color args={ ['#000000'] } attach="background" />


        <OrbitControls makeDefault />

            <Float rotationIntensity={ 0.4 }>
                <primitive 
                    object={ computer.scene } 
                    scale={ 2.5 }
                    position={ [ 0, 0, 0 ] }
                    rotation-y={ -0.65 }
                    envMapIntensity = { 5 }
                >
                    <Html
                        transform
                        wrapperClass="htmlScreen1"
                        distanceFactor={ 0.4 }
                        position={ [ 0.16, 0.14, -0.44 ] }
                        rotation={ [ -0.17, 0, 0 ] }
                        occlude
                    >
                        <iframe src="./bigger.html" />
                    </Html>
                    <Html
                        transform
                        wrapperClass="htmlScreen2"
                        distanceFactor={ 0.4 }
                        position={ [ -0.79 , 0.29, -0.488 ] }
                        rotation={ [ -0.17, 0, 0 ] }
                        occlude
                    >
                        <iframe src="./big.html" />
                    </Html>
                    <Html
                        transform
                        wrapperClass="htmlScreen3"
                        distanceFactor={ 0.4 }
                        position={ [ -0.73 , -0.09, -0.421 ] }
                        rotation={ [ -0.17, 0, 0 ] }
                        occlude
                    >
                        <iframe src="./small.html" />
                    </Html>
                </primitive>
            </Float>
    </>
}
