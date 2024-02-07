'use client'

import { Suspense } from 'react'
import styles from './page.module.css'
import { setUserAuthored, useAppDispatch, useAppSelector } from '@/store'

export default function Home() {
  const auth = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  return (
    <main className={styles.main}>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 20 }}>
        <button onClick={e => dispatch(setUserAuthored(true))}>login</button>
        <button onClick={e => dispatch(setUserAuthored(false))}>logout</button>
      </div>
      <div>
        <Suspense fallback={<div>loading...</div>}>
          {auth.isAuthored ? 'Authorized' : 'UnAuthorized'}
        </Suspense>
      </div>
    </main>
  )
}
