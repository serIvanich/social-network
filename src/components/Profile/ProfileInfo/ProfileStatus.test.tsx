import React from 'react'

import {create, ReactTestInstance} from 'react-test-renderer'

import ProfileStatus from './ProfileStatusHook'

describe('ProfileStatus component', () => {
    let updateStatus=jest.fn() as (status: string) => void
    
    test('status from props should be in the state', () => {
        
        const component = shallow(<ProfileStatus updateStatus={updateStatus} status='it-serik' />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('it-serik')
    })

    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus updateStatus={updateStatus} status='it-serik' />)
        const  root = component.root
        let span = root.findByType('span')
        expect(span).toBe(1)
    })

    test('after creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus updateStatus={updateStatus} status='it-serik' />)
        const  root = component.root
        let span = root.findByType('span')
        expect(span).toBe(1)
    })
})