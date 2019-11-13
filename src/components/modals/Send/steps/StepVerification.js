// @flow

import React, { PureComponent } from 'react'
import styled from 'styled-components'

import TrackPage from 'analytics/TrackPage'
import Box from 'components/base/Box'
import WarnBox from 'components/WarnBox'
import Interactions from 'icons/device/interactions'
import Text from 'components/base/Text'
import FormattedVal from 'components/base/FormattedVal'
import { getAccountUnit, getMainAccount } from '@ledgerhq/live-common/lib/account'
import { Trans } from 'react-i18next'
import type { StepProps } from '../types'

const Container = styled(Box).attrs(() => ({ alignItems: 'center', fontSize: 4, pb: 4 }))``
const Info = styled(Box).attrs(() => ({
  ff: 'Inter|SemiBold',
  color: 'palette.text.shade100',
  mt: 6,
  mb: 4,
  px: 5,
}))`
  text-align: center;
`

export default class StepVerification extends PureComponent<StepProps> {
  componentDidMount() {
    this.signTransaction()
  }

  signTransaction = async () => {
    const { transitionTo } = this.props
    // TODO: not very good pattern to pass transitionTo... Stepper needs to be
    // controlled
    this.props.signTransaction({ transitionTo })
  }

  render() {
    const { t, device, account, parentAccount, status } = this.props
    const mainAccount = getMainAccount(account, parentAccount)
    if (!mainAccount) return null
    const isBlue = device && device.modelId === 'blue'
    const { estimatedFees, amount } = status
    const unit = getAccountUnit(account)
    const feesUnit = getAccountUnit(mainAccount)

    return (
      <Container>
        <TrackPage category="Send Flow" name="Step Verification" />
        {!device ? null : (
          <Box mt={isBlue ? 4 : null}>
            <Interactions
              screen="validation"
              action="accept"
              type={device.modelId}
              width={isBlue ? 120 : 375}
              wire="wired"
            />
          </Box>
        )}
        <Info>{t('send.steps.verification.body')}</Info>
        <Box style={{ width: '100%' }} px={80} mb={20}>
          <Box horizontal justifyContent="space-between" mb={2}>
            <Text ff="Inter|Medium" color="palette.text.shade40" fontSize={3}>
              <Trans i18nKey="send.steps.details.amount" />
            </Text>
            <FormattedVal
              color={'palette.text.shade80'}
              unit={unit}
              val={amount}
              fontSize={3}
              inline
              showCode
            />
          </Box>
          <Box horizontal justifyContent="space-between">
            <Text ff="Inter|Medium" color="palette.text.shade40" fontSize={3}>
              <Trans i18nKey="send.steps.details.fees" />
            </Text>
            <FormattedVal
              color={'palette.text.shade80'}
              unit={feesUnit}
              val={estimatedFees}
              fontSize={3}
              inline
              showCode
            />
          </Box>
        </Box>
        <WarnBox>
          <Trans i18nKey="send.steps.verification.warning" />
        </WarnBox>
      </Container>
    )
  }
}
