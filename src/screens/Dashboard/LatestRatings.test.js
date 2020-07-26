import React from 'react'

import { fireEvent, render, waitForElement, waitFor } from '@testing-library/react'
import mockAxios from 'axios'
import LatestRatings from './LatestRatings'
import API from '../../API'

describe('TestsAPI', () => {
    it('Should menu expand on hover TestsAPI', async () => {
        //renderizar o componente
        const { getByTestId, getByText } = render(<LatestRatings />)
        
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(
            "http://www.mocky.io/v2/5eb553df31000060006994a8"
            
          );

        //fireEvent.mouseOver(menuNode)
        
        //verifica se o menu recebeu a classe "hover" ao passar o mouse em cima.
       // expect(menuNode).toBe(true)

      //  fireEvent.mouseLeave(menuNode)

        //verifica se o menu retirou a classe "hover" ao passar o mouse em cima.
        //expect(menuNode.classList.contains('hover')).toBe(false)
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