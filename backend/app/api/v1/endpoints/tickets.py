from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import schemas, models
from app.api import deps
from app.db.session import get_db

router = APIRouter()

@router.get("/", response_model=List[schemas.bet_ticket.BetTicket])
def read_tickets(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 10,
    current_user: models.user.User = Depends(deps.get_current_active_user),
) -> Any:
    # Filter logic: Premium users see premium tickets, free users don't
    query = db.query(models.bet_ticket.BetTicket)
    if current_user.role != models.user.UserRole.PREMIUM and current_user.role != models.user.UserRole.ADMIN:
        query = query.filter(models.bet_ticket.BetTicket.is_premium == False)

    tickets = query.order_by(models.bet_ticket.BetTicket.created_at.desc()).offset(skip).limit(limit).all()
    return tickets
