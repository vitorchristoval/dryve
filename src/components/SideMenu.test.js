import React from 'react'

import { fireEvent, render, waitForElement } from '@testing-library/react'

import SideMenu from './SideMenu'

describe('Tests for Menu component', () => {
    it('Should menu expand on hover', async () => {
        //renderizar o componente
        const { getByTestId, getByText } = render(<SideMenu />)

        const menuNode = await waitForElement(
            () => getByTestId('menu')
        )

        fireEvent.mouseOver(
            menuNode
          
        )

        //verifica se o menu recebeu a classe "hover" ao passar o mouse em cima.
        expect(menuNode.classList.contains('hover')).toBe(true)


        fireEvent.mouseLeave(
            menuNode
          
        )
        //verifica se o menu retirou a classe "hover" ao passar o mouse em cima.
        expect(menuNode.classList.contains('hover')).toBe(false)
        //     const newTask = 'testing'
        //     fireEvent.change(
        //         fieldNode,
        //         { target: { value: newTask } }
        //     )
        //     expect(fieldNode.value).toEqual(newTask)

        //     // buscar botao
        //     const btnNode = await waitForElement(
        //         () => getByTestId('form-btn')
        //     )
        //     fireEvent.click(btnNode)
        //    fireEvent.mouseOver


        // clicar no botao
        //buscar a tablea
        // verificar se a tarefa foi adicionada na table
    })
})