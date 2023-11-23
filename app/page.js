import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './page.module.css'

export default function Home() {


  return (
    <div className={styles.global}>
      <div className={styles.header}>asd</div>
      <div className="body">
        <div className={styles.bodyHeader}>
          <Typography>Codigo</Typography>
          <Typography>Codigo expediente</Typography>
          <Typography>parte demanda</Typography>
          <Typography>parte demandante</Typography>
          <Typography>Cuantia</Typography>
        </div>
        <Typography>Expedientes</Typography>
        <div className={styles.bodyBody}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Expediente 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Expediente 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      
    </div>
  )
}

export const getServerSideProps = () => {}
