import React from 'react'

import { fireEvent, render, waitForElement, logDOM } from '@testing-library/react'

import DataClient from './DataClient'

describe('Tests for Menu component', () => {
    it('Should menu expand on hover', async () => {
        //renderizar o componente
        const { getByTestId, getByText } = render(<DataClient />)

        const menuNode = await waitForElement(
            () => getByTestId('addPhone')
        )
        const resultNode = await waitForElement(
            () => getByTestId('result')
        )

        fireEvent.click(menuNode)
        
        //verifica se o menu recebeu a classe "hover" ao passar o mouse em cima.
        expect(resultNode.classList.contains('phone-2')).toBe(true)

       
    })
})