import React, { useEffect } from 'react'
import { Alert, Container, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { getArchive } from '../bus/order/archive/selectors'
import { fetchOrders } from '../bus/order/archive/thunks'
import { dateFormat } from '../utils'

import { CustomSpinner } from '../components/CustomSpinner/CustomSpinner'
import { LinkListItem } from '../components/links/LinkListItem/LinkListItem'
import { TableOrder } from '../components/TableOrder/TableOrder'

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
        <React.Fragment>
          <ListGroup>
            {archive.map((a) => (
              <LinkListItem
                key={a.id}
                link={`/archive/${a.id}`}
                linkTitle={dateFormat(a.createdAt)}
              >
                <TableOrder pieces={a.pieces} />
              </LinkListItem>
            ))}
          </ListGroup>
        </React.Fragment>
      ) : (
        <h3>You haven’t ordered yet</h3>
      )}
    </Container>
  )
}
