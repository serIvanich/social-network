import { create } from 'react-test-renderer';
import React from 'react'

import Paginator from './Paginator'

describe('Paginator component tests', () => {
    test('pages count is 11 but should be showed only 10', () => {
        const component = create(<Paginator  currentPage={1} onChangePage={jest.fn()}   totalItemsCount={11} pageSize={1} portionSize={10} />)
        const root = component.root
        let span = root.findAllByType('span')
        expect(span.length).toBe(10)
    })
    test('if pages count is more then 10 but next should be present', () => {
        const component = create(<Paginator currentPage={1} onChangePage={jest.fn()} totalItemsCount={11} pageSize={1} portionSize={10} />)
        const root = component.root
        let button = root.findAllByType('button')
        expect(button.length).toBe(1)
    })
})