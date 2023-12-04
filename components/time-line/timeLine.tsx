import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoffee,
  faMapPin,
  faCheckCircle,
  faExclamationCircle,
  faMapMarked,
  faCircleRight,
  faCircleLeft,
  faDolly,
  faShip,
  faEye,
  faClone,
  faCopy,
  faHourglass1,
} from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'
import nodeCluster from 'node:cluster'
import { getPreApprovalImage } from '../../store/services/transfer'

type LayoutProps = {
  data: any
}

export default function TimeLine({ data, ...props }: LayoutProps) {
  const [oneImage, setOneImage] = useState('')
  const [map, setMap] = useState(new Map())

  async function getImageFromServer(id: string) {
    let imageBlob
    try {
      imageBlob = await getPreApprovalImage(id)
    } catch (err) {
      return ''
    }
    console.log('imagen from server', imageBlob.data)
    return URL.createObjectURL(imageBlob.data)
  }

  async function getImage(id: string) {
    let recoveredImage = map.get(id)
    if (!recoveredImage) {
      recoveredImage = await getImageFromServer(id)
    } else {
      recoveredImage = null
    }
    setOneImage(recoveredImage)
    const _map = new Map(map)
    _map.set(id, recoveredImage)
    setMap(_map)
  }

  return (
    <Fragment>
      <VerticalTimeline lineColor={'blue'}>
        {/*crear la visualizacion*/}

        {data.map((trip: any, iTrips: any, rowTrips: any) => {
          return (
            <Fragment>
              <VerticalTimelineElement
                iconStyle={{ background: '#94a3b8', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faMapPin} />}
                date={`Trip: ${trip.trip}`}
              />

              {trip.nodes.map((node: any, iNodes: any, rowNodes: any) => {
                const lastNode =
                  iTrips + 1 === rowTrips.length &&
                  iNodes + 1 === rowNodes.length
                const clipboarInfo =
                  node.transfer &&
                  `ImageHash ${node.nodeHash} Ship TX ${node.transfer.transactionApprovedHash} Receive TX ${node.transfer.transactionReceivedHash} `
                return (
                  <Fragment>
                    <VerticalTimelineElement
                      key={iNodes}
                      className="vertical-timeline-element--work"
                      date={node.updateAt ? node.updateAt : node.createAt}
                      contentStyle={
                        lastNode
                          ? { background: '#1d4ed8', color: '#fff' }
                          : { background: '#f5f5f4' }
                      }
                      contentArrowStyle={
                        lastNode
                          ? { borderRight: '7px solid  rgb(33, 150, 243)' }
                          : { background: '#f5f5f4' }
                      }
                      iconStyle={
                        lastNode
                          ? { background: '#1d4ed8', color: '#fff' }
                          : { background: '#94a3b8', color: '#fff' }
                      }
                      icon={
                        <FontAwesomeIcon
                          icon={lastNode ? faMapMarked : faCheckCircle}
                        />
                      }
                    >
                      <h3 className="vertical-timeline-element-title">
                        <FontAwesomeIcon
                          className="notification-timeline-element-icon"
                          icon={faShip}
                        />
                        {node.identifier} :: {node.name}
                      </h3>
                      {node.transfer && node.transfer.transactionApprovedHash && (
                        <Fragment>
                          <ReactTooltip
                            id={node.transfer.transactionApprovedHash}
                          >
                            {node.transfer.transactionApprovedHash}
                          </ReactTooltip>

                          <p
                            data-tip=""
                            data-for={node.transfer.transactionApprovedHash}
                          >
                            <FontAwesomeIcon
                              icon={faCircleLeft}
                              className="notification-timeline-element-icon"
                            />
                            Receiving Transaction
                          </p>
                        </Fragment>
                      )}
                      {node.transfer && node.transfer.transactionReceivedHash && (
                        <Fragment>
                          <ReactTooltip
                            id={node.transfer.transactionReceivedHash}
                          >
                            {node.transfer.transactionReceivedHash}
                          </ReactTooltip>

                          <p
                            data-tip=""
                            data-for={node.transfer.transactionReceivedHash}
                          >
                            <FontAwesomeIcon
                              icon={faCircleRight}
                              className="notification-timeline-element-icon"
                            />
                            Shipping Transaction
                          </p>
                        </Fragment>
                      )}
                      {trip.trip && (
                        <Fragment>
                          <p>
                            <FontAwesomeIcon
                              icon={faDolly}
                              className="notification-timeline-element-icon"
                            />
                            Tracking Code: {trip.trip}
                          </p>
                        </Fragment>
                      )}

                      {node.nodeHash && node && node.transfer?.filename && (
                        <Fragment>
                          <ReactTooltip id={node.nodeHash}>
                            {node.nodeHash}
                          </ReactTooltip>

                          <p data-tip="" data-for={node.nodeHash}>
                            <FontAwesomeIcon
                              icon={faEye}
                              className="notification-timeline-element-icon"
                            />

                            <a
                              href="#!"
                              onClick={() => {
                                getImage(node.transfer.filename)
                                console.log(
                                  'desde el link',
                                  map.get(node.transfer.filename)
                                )
                              }}
                              className={
                                lastNode
                                  ? 'text-white-600 mb-4 transition duration-300 ease-in-out hover:text-blue-700'
                                  : 'mb-4 text-blue-600 transition duration-300 ease-in-out hover:text-blue-700'
                              }
                            >
                              Container loading images
                            </a>
                          </p>

                          <img src={map.get(node.transfer.filename)}></img>
                        </Fragment>
                      )}
                      <p>
                        <FontAwesomeIcon
                          icon={faCopy}
                          className="notification-timeline-element-icon"
                        />
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(clipboarInfo)
                          }}
                        >
                          {' '}
                          Copy BlockChain Data{' '}
                        </button>
                      </p>
                    </VerticalTimelineElement>
                  </Fragment>
                )
              })}
            </Fragment>
          )
        })}
      </VerticalTimeline>
    </Fragment>
  )
}
