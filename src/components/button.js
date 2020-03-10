import styled from 'styled-components';

export default styled.button`
    border: none;
    padding: .5rem 1rem;
    font-size: 2rem;
    background: white;
    color: teal;
    border-radius: 1rem;
    border: 5px solid teal;
    margin: 1rem 1rem 1rem 0;
    font-family: 'Roboto', sans-serif;
    transition: all .2s ease-in-out;

    &:hover {
        box-shadow: 2px 2px 2px 2px 5px #888888;
    }

    @media only screen and (max-width: 500px) {
      font-size: 1.5rem;
    }
`