import { PaymentOptionProps } from 'interfaces/checkout'

import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.5rem;

    width: 100%;
    max-width: 1100px;

    margin: 0 auto;
    padding: 0 1.25rem;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      &:nth-child(1) {
        flex: 1;
      }
      &:nth-child(2) {
        min-width: 448px;
      }

      > h2 {
        font-family: ${({ theme }) => theme.fonts.family.baloo2};
        font-size: 1.125rem;
      }
    }
  }
`

export const FormBox = styled.div`
  background: ${({ theme }) => theme.colors.baseCard};

  border-radius: 6px;

  padding: 2.5rem;

  margin-bottom: 1rem;

  form {
    > div {
      margin: 1rem 0;

      &.limited-input {
        width: 200px !important;
      }

      &.two-columns {
        display: grid;
        grid-template-columns: 200px 1fr;
        gap: 1rem;
      }
      &.three-columns {
        display: grid;
        grid-template-columns: 200px 1fr 150px;
        gap: 1rem;
      }
    }
  }

  .payment-options-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;

    margin-top: 1.5rem;
  }
`

export const FormBoxHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .line {
      width: 16px;
      height: 1px;

      margin: -2px auto 0;

      background: ${({ theme }) => theme.colors.primary[700]};
    }
  }

  > div:nth-child(2) {
    margin-left: 0.5rem;

    h4 {
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
    }

    p {
      color: ${({ theme }) => theme.colors.baseText};
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
    }
  }
`

export const PaymentOption = styled.div<PaymentOptionProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.75rem;

  width: fit-content;
  max-width: 178px;

  background: ${({ theme, active }) =>
    active ? theme.colors.secondary[300] : theme.colors.baseButton};

  border: 1px solid
    ${({ theme, active }) =>
      active ? theme.colors.secondary[500] : theme.colors.baseButton};
  border-radius: 6px;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary[300]};
  }

  p {
    font-size: 0.75rem;
    text-transform: uppercase;

    cursor: pointer;
  }
`

export const Box = styled.div`
  background: ${({ theme }) => theme.colors.baseCard};

  border-radius: 6px 44px;

  padding: 2.5rem;

  .resume {
    width: 100%;

    table {
      width: 100%;

      gap: 100%;

      border-collapse: separate;

      tr {
        td:nth-child(2) {
          text-align: right;
        }
      }

      tbody {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.baseText};
      }

      tfoot {
        font-weight: 700;
        font-size: 1.25rem;
      }
    }
  }

  > button {
    width: 100%;

    text-transform: uppercase;
    font-weight: 700;

    padding: 0.75rem;
  }
`
