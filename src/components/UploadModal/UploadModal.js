import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Button, Modal, Form, ButtonGroup } from 'react-bootstrap'
import Select from 'react-select'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

import { getFilters } from '../../bus/products/filters/selectors'
import { onUpload } from '../../bus/uploadModal/selectors'
import { validationSchema } from './schema'

import LogoImg from '../../assets/logo.png'

export const UploadModal = ({ show, onHide, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const { data } = useSelector(onUpload)
  const { allOrigins } = useSelector(getFilters)

  const submitWithReset = (form) => {
    data ? onSubmit(form, data.id) : onSubmit(form)
    reset()
  }

  const closeWithReset = () => {
    onHide()
    reset()
  }

  const setDataField = () => {
    const originSelect = allOrigins.find((a) => a.value === data.origin)

    setValue('name', data.name)
    setValue('price', data.price)
    setValue('origin', originSelect)
  }

  useEffect(() => {
    if (data) setDataField()
  }, [data])

  return (
    <Modal
      show={show}
      onHide={closeWithReset}
      keyboard={false}
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0 text-center flex-column">
        <img src={LogoImg} alt="Shopland" />
        <Modal.Title className="w-100">Add your product to store</Modal.Title>
      </Modal.Header>

      <form onSubmit={handleSubmit(submitWithReset)}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              {...register('name')}
            />
            {errors.name && (
              <small className="text-danger ms-1">{errors.name.message}</small>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              min="0"
              {...register('price')}
            />

            {errors.price && (
              <small className="text-danger ms-1">{errors.price.message}</small>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Origin</Form.Label>
            <Controller
              name="origin"
              control={control}
              render={({ field }) => <Select {...field} options={allOrigins} />}
            />

            {errors.origin && (
              <small className="text-danger ms-1">
                {errors.origin.message}
              </small>
            )}
          </Form.Group>
        </Modal.Body>
        {data ? (
          <Modal.Footer className="justify-content-around border-0 px-1">
            <ButtonGroup>
              <Button variant="outline-dark" onClick={closeWithReset}>
                Close editing
              </Button>
              <Button
                variant="outline-secondary px-4"
                onClick={() => setDataField()}
              >
                Reset data
              </Button>
            </ButtonGroup>

            <Button variant="outline-danger" type="submit">
              Confirm changes
            </Button>
          </Modal.Footer>
        ) : (
          <Modal.Footer className="justify-content-around border-0">
            <Button variant="outline-dark w-25" onClick={closeWithReset}>
              Close
            </Button>
            <Button variant="outline-danger w-25" type="submit">
              Upload
            </Button>
          </Modal.Footer>
        )}
      </form>
    </Modal>
  )
}

UploadModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
