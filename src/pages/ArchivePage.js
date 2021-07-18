import React, { useEffect } from 'react'
import { Alert, Container, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { getArchive } from '../bus/order/archive/selectors'
import { fetchOrders } from '../bus/order/archive/thunks'

import { CustomSpinner } from '../components/CustomSpinner/CustomSpinner'
import { LinkListItem } from '../components/LinkListItem/LinkListItem'

export const ArchivePage = () => {
  const dispatch = useDispatch()
  const { archive, loading, error } = useSelector(getArchive)

  useEffect(() => {
    dispatch(fetchOrders())
  }, [])

  return (
    <Container className="fade-in">
      {loading && <CustomSpinner />}
      {error && <Alert variant="danger">{error}</Alert>}

      {archive && archive.length ? (
        <ListGroup>
          {archive.map((a) => (
            <LinkListItem key={a.id} link={a.id} {...a} />
          ))}
        </ListGroup>
      ) : (
        <h3>You haven’t ordered yet</h3>
      )}
    </Container>
  )
}
