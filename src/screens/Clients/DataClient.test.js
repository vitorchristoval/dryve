import React from 'react'

import { fireEvent, render, waitForElement, logDOM } from '@testing-library/react'

import DataClient from './DataClient'

describe('Tests for DataClient component', () => {
    it('Display another phone field when clicked', async () => {
        //renderizar o componente
        const { getByTestId, getByText } = render(<DataClient />)

        const phoneNode = await waitForElement(
            () => getByTestId('addPhone')
        )
        const resultNode = await waitForElement(
            () => getByTestId('result')
        )

        fireEvent.click(phoneNode)
      
        expect(resultNode.classList.contains('phone-2')).toBe(true)

       
    })
})